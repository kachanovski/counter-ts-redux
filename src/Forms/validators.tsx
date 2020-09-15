export type ValueStateType = {
    start: string
    max: string
}

export const validate = (values: any) => {
    const errors: any = {}  /// ???
    const startValueParse = parseInt(values.start)
    const maxValueParse = parseInt(values.max)
    if (!startValueParse) {
        errors.start = "incorrect value"
    } else if (!maxValueParse) {
        errors.max = "incorrect value"
    } else if (startValueParse > maxValueParse) {
        errors.start = 'start value more than max value'
    } else if (startValueParse <= 0) {
        errors.start = 'start values just more than 0'
    } else if (maxValueParse < 0) {
        errors.max = ' max values just more than 0'
    } else if (startValueParse > maxValueParse) {
        errors.start = 'start value more than max value'
    } else if (startValueParse === maxValueParse) {
        errors.max = "identical values"
    }
    return errors
}
