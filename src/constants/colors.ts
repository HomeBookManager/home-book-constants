import colors from '../../config/sass/colors';

export const COMMON_COLORS = {
  blue1: colors['$--hb-common-neutral-1'],
  blue2: colors['$--hb-common-neutral-2'],
  green1: colors['$--hb-common-neutral-blue-1'],
  green2: colors['$--hb-common-neutral-blue-2'],
  neutral1: colors['$--hb-common-neutral-sky-blue-1'],
  neutral2: colors['$--hb-common-neutral-green-1'],
  orange1: colors['$--hb-common-neutral-green-2'],
  orange2: colors['$--hb-common-neutral-red-1'],
  red1: colors['$--hb-common-neutral-orange-1'],
  skyBlue1: colors['$--hb-common-neutral-orange-2'],
  violet1: colors['$--hb-common-neutral-violet-1'],
} as const;

export const DARK_COLORS = {
  neutral1: colors['$--hb-neutral-1--dark'],
  neutral2: colors['$--hb-neutral-2--dark'],
  neutral3: colors['$--hb-neutral-3--dark'],
  neutral4: colors['$--hb-neutral-4--dark'],
  neutral5: colors['$--hb-neutral-5--dark'],
} as const;

export const LIGHT_COLORS = {
  neutral1: colors['$--hb-neutral-1'],
  neutral2: colors['$--hb-neutral-2'],
  neutral3: colors['$--hb-neutral-3'],
  neutral4: colors['$--hb-neutral-4'],
  neutral5: colors['$--hb-neutral-5'],
} as const;

export const FORM_COLORS = {
  disabled: colors['$--hb-label-disabled'],
  disabledDark: colors['$--hb-label-disabled--dark'],
  error: colors['$--hb-error'],
  errorFocus: colors['$--hb-error-focus'],
  label: colors['$--hb-label'],
  labelDark: colors['$--hb-label--dark'],
} as const;
