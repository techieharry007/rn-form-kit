import { View, TouchableOpacity} from "react-native";
import { useMemo, useState } from "react";
import * as React from "react";
import ModalComp from "../../components/CommonModal/modalComponent";
import useRTLStyles from '../../components/Calendar/styles';
import commonStyles from '../../styles'
import { Colors } from "../../utils/colors";
import TextComp from "../../components/TextCmp/textCmp"
import { CrossIcon, LeftIcon, RightIcon } from "../../assets/icons";
import { scale } from '../../utils/dimensions';
import { MONTH_NAMES, WEEKDAY_LABELS } from "../../utils/constants";
import { CalendarProps } from "../../types";
import { formatDateYYYYMMDD, getCalendarDays } from "../../utils/helper";




const CalendarCmp: React.FC<CalendarProps> = ({
  theme = "light",
  handleOnChange,
  inputBoxStyle,
  dateTextStyle,
  currentDateStyle,
  label,
  labelStyle,
  required,
  error,
}) => {
  const [calendarViewDate, setCalendarViewDate] = useState(() => new Date());
  const [date, setDate] = useState("Select Date");
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const styles = useRTLStyles(false, theme);
  const commonStyle = commonStyles(false, theme);

  const colors = Colors[theme];

  const onSelectDate = (year: number, month: number, day: number) => {
    const d = new Date(year, month, day);
    const date = formatDateYYYYMMDD(d);
    setDate(date);
    handleOnChange(date);
    setDateModalVisible(false);
  };

  const handlePrevMonth = () =>
    setCalendarViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1),
    );
  const handleNextMonth = () =>
    setCalendarViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1),
    );

  const calendarDays = useMemo(
    () =>
      getCalendarDays(
        calendarViewDate.getFullYear(),
        calendarViewDate.getMonth(),
      ),
    [calendarViewDate],
  );
  const today = useMemo(() => new Date(), []);
  const selectedDateParts = date
    ? (() => {
        const [y, m, d] = date.split("-").map(Number);
        return { year: y, month: m - 1, day: d };
      })()
    : null;

  const placeHolderColor = useMemo(
    () => (date === "Select Date" ? colors.inputPlaceholder : colors.black),
    [date],
  );

  return (
    <View>
      <View style={commonStyle.labelLayout}>
        <TextComp text={label} style={labelStyle} />
        {required ? <TextComp text="*" style={commonStyle.requiredStar} /> : null}
      </View>
      <TouchableOpacity
        style={[styles.dateWrapper, inputBoxStyle]}
        onPress={() => setDateModalVisible(true)}
      >
        <TextComp
          text={date}
          style={[{ color: placeHolderColor }, dateTextStyle]}
        />
      </TouchableOpacity>
      <ModalComp
        isVisible={dateModalVisible}
        onClose={() => {
          setDateModalVisible(false);
          setDate("Select Date");
        }}
        containerStyle={styles.modalContainer}
      >
        <View style={styles.modalHeader}>
          <TextComp text="SELECT DATE" style={styles.modalTitle} />
          <TouchableOpacity
            onPress={() => setDateModalVisible(false)}
            style={styles.modalCloseButton}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          >
            <CrossIcon size={scale(12)} color={colors.black} />
          </TouchableOpacity>
        </View>
        <View style={styles.locationModalContent}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity
              onPress={handlePrevMonth}
              style={styles.calendarNavButton}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <LeftIcon size={scale(28)} color={colors.text} />
            </TouchableOpacity>
            <TextComp
              isDynamic
              text={`${MONTH_NAMES[calendarViewDate.getMonth()]} ${calendarViewDate.getFullYear()}`}
              style={styles.calendarMonthTitle}
            />
            <TouchableOpacity
              onPress={handleNextMonth}
              style={styles.calendarNavButton}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            >
              <RightIcon size={scale(28)} color={colors.text} />
            </TouchableOpacity>
          </View>
          <View style={styles.weekdayRow}>
            {WEEKDAY_LABELS.map((label) => (
              <View key={label} style={styles.weekdayCell}>
                <TextComp isDynamic text={label} style={styles.weekdayLabel} />
              </View>
            ))}
          </View>
          <View style={styles.calendarGrid}>
            {[0, 1, 2, 3, 4, 5].map((rowIndex) => (
              <View key={rowIndex} style={styles.calendarRow}>
                {calendarDays
                  .slice(rowIndex * 7, rowIndex * 7 + 7)
                  .map((dayNum, colIndex) => {
                    const index = rowIndex * 7 + colIndex;
                    const isCurrentMonth = dayNum !== null;
                    const year = calendarViewDate.getFullYear();
                    const month = calendarViewDate.getMonth();
                    const isToday =
                      isCurrentMonth &&
                      today.getFullYear() === year &&
                      today.getMonth() === month &&
                      today.getDate() === dayNum;
                    const isSelected =
                      selectedDateParts &&
                      selectedDateParts.year === year &&
                      selectedDateParts.month === month &&
                      selectedDateParts.day === dayNum;
                    return (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.calendarDayCell,
                          !isCurrentMonth && styles.calendarDayCellMuted,
                          isToday && styles.calendarDayCellToday,
                          isToday && currentDateStyle && currentDateStyle,
                          isSelected && styles.calendarDayCellSelected,
                        ]}
                        onPress={() =>
                          isCurrentMonth &&
                          dayNum !== null &&
                          onSelectDate(year, month, dayNum)
                        }
                        disabled={!isCurrentMonth}
                        activeOpacity={0.7}
                      >
                        <TextComp
                          isDynamic
                          text={dayNum !== null ? String(dayNum) : ""}
                          style={[
                            styles.calendarDayText,
                            !isCurrentMonth && styles.calendarDayTextMuted,
                            isSelected && styles.calendarDayTextSelected,
                            dateTextStyle && dateTextStyle,
                          ]}
                        />
                      </TouchableOpacity>
                    );
                  })}
              </View>
            ))}
          </View>
        </View>
      </ModalComp>
      <TextComp text={error} style={commonStyle.error} />
    </View>
  );
};

export default React.memo(CalendarCmp);
