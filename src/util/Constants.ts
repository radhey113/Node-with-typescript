
export default {

    SERVER: {
        APP_NAME                      : "demo",
        TOKEN_EXPIRATION_IN_MINUTES   : 600,
        JWT_SECRET_KEY                : process.env.JWT_SECRET || "demo_typescript_application_JWT_SECRET_KEY",
        COUNTRY_CODE                  : "+91",
        MAX_DISTANCE_RADIUS_TO_SEARCH : "1",
        THUMB_WIDTH                   : 300,
        THUMB_HEIGHT                  : 300,
        DOMAIN_NAME                   : "http://127.0.0.1:4000/",
        SUPPORT_EMAIL                 : "node-with-typescript-express@support.com",
        ISACTIVE                      : [
            {   NOT_VERIFIED  : 0 },
            {   VERIFIED      : 1 },
            {   DELETED       : 2 }
        ]
    },

    API:{
        UserRoutes: {
            user: "/api/v1/user"
        }
    },

    DATABASE: {

        ZONES: {
            NORTH: "NORTH",
            SOUTH: "SOUTH",
            BOTH: "BOTH"
        },
        STATUS: {
            OPEN: "OPEN",
            PENDING: "PENDING",
            ACCEPT: "ACCEPT",
            REJECT: "REJECT",
            APPROVED: "APPROVED",
            CLOSE: "CLOSE",
            DELETED: "DELETED"
        },
        LEAD_TYPE: {
            FULL: "FULL",
            QUICK: "QUICK"
        },

        PROFILE_PIC_PREFIX: {
            ORIGINAL: "profilePic_",
            THUMB: "profileThumb_"
        },

        LOGO_PREFIX: {
            ORIGINAL: "logo_",
            THUMB: "logoThumb_"
        },

        DOCUMENT_PREFIX: "document_",

        USER_ROLES: {
            USER: 0,
            ADMIN: 1,
            PATIENT: 2,
            DOCTOR: 3,
            HOSPITAL: 4
        },

        APPOINTMENT_STATUS: {
            PENDING: 1,
            CANCELED: 2,
            FIXED: 3,
            COMPLETED: 4
        },

        DEVICE_TYPES: {
            IOS: "IOS",
            ANDROID: "ANDROID"
        },

        STATUS_TYPES: {
            PENDING: "PENDING",
            PROGRESS: "PROGRESS",
            DELIVERED: "DELIVERED",
            ACCEPT: "ACCEPT",
            USERRATE: "USERRATE",
            COMPLETE: "COMPLETE",
            CANCEL: "CANCEL",
            RATING: "RATING"
        },

        GENDER: {
            MALE: "MALE",
            FEMALE: "FEMALE"
        },

        LANGUAGE: {
            EN: "EN",
            ES_MX: "ES_MX"
        },

        PAYMENT_OPTIONS: {
            CREDIT_DEBIT_CARD: "CREDIT_DEBIT_CARD",
            PAYPAL: "PAYPAL",
            BITCOIN: "BITCOIN",
            GOOGLE_WALLET: "GOOGLE_WALLET",
            APPLE_PAY: "APPLE_PAY",
            EIYA_CASH: "EIYA_CASH"
        },

        ALERT_TYPE: {
            HOUR_24: 0,
            PRICE_TYPE: 1
        }
    },


    STATUS_MSG: {
        CUSTOME_MESSAGE: (message, statusCode) => {
            return {
                statusCode    : statusCode,
                type          : "Default",
                customMessage : message
            };
        },

        SUCCESS: {

            CREATED                     : "Created Successfully",
            DEFAULT                     : "Success",
            UPDATED                     : "Updated Successfully",

            LOGOUT                      : "Logged Out Successfully",
            DELETED                     : "Deleted Successfully",
            EMAIL_OTP_VERIFIED          : "Email verified successfully",

            FORGOT_OTP_VERIFIED         : "New password is sent to your registered email address"

        },

        ERROR: {

            EMAIL_ALREADY_VERIFIED              : "ALREADY VERIFIED",
            INVALID_OTP                         : "OTP INVALID",
            OTP_EXPIRED                         : "OTP EXPIRED",

            INVALID_USER_ROLE                   : "Invalid user role",
            ALREADY_EXIST_PHONE_EMAIL_USERNAME  : "Email Username and Phone number is already exist",
            ALREADY_EXIST_USERNAME              : "Username already exist",

            ALREADY_EXIST_EMAIL                 : "Email already exist",
            ALREADY_EXIST_PHONE                 : "Phone already exist",
            ANSWER_NOT_MATCHED                  : "Recovery answer not matched",

            INVALID_FILES                       : "Invalid file type or Invalid file size",
            DELETED_USER                        : "You are no more Sales Excecutive register again !",
            ASSIGN_PENDING                      : "You are not authorized to create the Sales Excecutive!",

            CAN_NOT_DELETE                      : "Plz reallocate all lead to another Sales Executive first!",
            PENDING_CONFIRM                     : "Pending Request Not Confirmed by SalesExcecutive",
            ALREADY_EXIST                       : "EmployeeCode Already Exist",

            APPROVAL_PENDING                    : "Your approval is pending",
            DATA_NOT_FOUND                      : "No data Found",
            INVALID_USER_PASS                   : "Invalid username or password",

            DUPLICATE                           : "Duplicate Entry",
            INVALID_REFERRAL_CODE               : "Invalid Referral Code",
            INVALID_EMAIL                       : "Invalid Email Address",

            EMAIL_REQUIRED                      : "Email is required.",
            USERNAME_REQUIRED                   : "Username is required.",
            INCORRECT_PASSWORD                  : "Incorrect Password"

        }
    },

    LANGUAGE_SPECIFIC_MESSAGE: {
        VERIFICATION_CODE_MSG: {
            EN    :
                "Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}",
            ES_MX :
                "Your 4 digit verification code for Seed Project is {{four_digit_verification_code}}"
        }
    }
};

