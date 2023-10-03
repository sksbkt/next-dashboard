export const LINKS = {
    root: '/',
    data: '/dashboard/data',
    profile: '/dashboard/profile',
    settings: '/dashboard/settings',
    terms: '/#termsandconditions',
    accessability: '/#accessabilitystatement'
}

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const months = (config: any) => {
    const cfg = config || {};
    const count = cfg.count || 12;
    const section = cfg.section;
    const values = [];
    let i, value;

    for (i = 0; i < count; i++) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}


export const validationType = {
    firstName: { regex: "^[A-Za-z][A-Za-z0-9_]{1,29}$", errorText: "must be more than one character" },
    lastName: { regex: "^[A-Za-z][A-Za-z0-9_]{1,29}$", errorText: "must be more than one character" }
}

export const formValidation = (value: string, type: any) => {
    console.log(type.regex);

    return { value: value.match(type.regex) ? true : false, errorText: value.match(type.regex) ? type.errorText : '' };
}