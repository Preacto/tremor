import {
    BaseColors,
    DeltaTypes,
    Sizing,
    colorTheme,
    fontSize,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';

import { ArrowDownIcon, ArrowDownRightIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpRightIcon } from 'assets';

export type BadgeProportionTypes = {
    paddingLeft: string,
    paddingRight: string,
    paddingTop: string,
    paddingBottom: string,
    fontSize: string,
}

export const badgeProportionsIconOnly: {[char: string]: BadgeProportionTypes} = {
    xs: {
        paddingLeft: spacing.sm.paddingLeft,
        paddingRight: spacing.sm.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.xs,
    },
    sm: {
        paddingLeft: spacing.md.paddingLeft,
        paddingRight: spacing.md.paddingRight,
        paddingTop: spacing.twoXs.paddingTop,
        paddingBottom: spacing.twoXs.paddingBottom,
        fontSize: fontSize.sm,
    },
    md: {
        paddingLeft: spacing.lg.paddingLeft,
        paddingRight: spacing.lg.paddingRight,
        paddingTop: spacing.xs.paddingTop,
        paddingBottom: spacing.xs.paddingBottom,
        fontSize: fontSize.md,
    },
    lg: {
        paddingLeft: spacing.xl.paddingLeft,
        paddingRight: spacing.xl.paddingRight,
        paddingTop: spacing.xs.paddingTop,
        paddingBottom: spacing.xs.paddingBottom,
        fontSize: fontSize.lg,
    },
};

export const badgeProportionsWithText: {[char: string]: BadgeProportionTypes} = {
    xs: {
        paddingLeft: spacing.sm.paddingLeft,
        paddingRight: spacing.sm.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.xs,
    },
    sm: {
        paddingLeft: spacing.md.paddingLeft,
        paddingRight: spacing.md.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.sm,
    },
    md: {
        paddingLeft: spacing.lg.paddingLeft,
        paddingRight: spacing.lg.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.md,
    },
    lg: {
        paddingLeft: spacing.xl.paddingLeft,
        paddingRight: spacing.xl.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.lg,
    },
};

export const iconSizes: {[size: string]: Sizing} = {
    xs: {
        height: sizing.md.height,
        width: sizing.md.width,
    },
    sm: {
        height: sizing.md.height,
        width: sizing.md.width
    },
    md: {
        height: sizing.md.height,
        width: sizing.md.width
    },
    lg: {
        height: sizing.lg.height,
        width: sizing.lg.width,
    },
};


export type ColorTypes = {
    bgColor: string,
    textColor: string,
}

export const colors: {[key: string]: ColorTypes} = {
    [DeltaTypes.Increase]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    },
    [DeltaTypes.ModerateIncrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    },
    [DeltaTypes.Decrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    },
    [DeltaTypes.ModerateDecrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    },
    [DeltaTypes.Unchanged]: { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).textColor,
    },
};

export const deltaIcons: {[key: string]: React.ElementType} = {
    [DeltaTypes.Increase]: ArrowUpIcon,
    [DeltaTypes.ModerateIncrease]: ArrowUpRightIcon,
    [DeltaTypes.Decrease]: ArrowDownIcon,
    [DeltaTypes.ModerateDecrease]: ArrowDownRightIcon,
    [DeltaTypes.Unchanged]: ArrowRightIcon,
};