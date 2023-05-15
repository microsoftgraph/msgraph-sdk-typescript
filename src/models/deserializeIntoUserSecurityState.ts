import {EmailRole} from './emailRole';
import {LogonType} from './logonType';
import {UserAccountSecurityType} from './userAccountSecurityType';
import {UserSecurityState} from './userSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSecurityState(userSecurityState: UserSecurityState | undefined = {} as UserSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "aadUserId": n => { userSecurityState.aadUserId = n.getStringValue(); },
        "accountName": n => { userSecurityState.accountName = n.getStringValue(); },
        "domainName": n => { userSecurityState.domainName = n.getStringValue(); },
        "emailRole": n => { userSecurityState.emailRole = n.getEnumValue<EmailRole>(EmailRole); },
        "isVpn": n => { userSecurityState.isVpn = n.getBooleanValue(); },
        "logonDateTime": n => { userSecurityState.logonDateTime = n.getDateValue(); },
        "logonId": n => { userSecurityState.logonId = n.getStringValue(); },
        "logonIp": n => { userSecurityState.logonIp = n.getStringValue(); },
        "logonLocation": n => { userSecurityState.logonLocation = n.getStringValue(); },
        "logonType": n => { userSecurityState.logonType = n.getEnumValue<LogonType>(LogonType); },
        "@odata.type": n => { userSecurityState.odataType = n.getStringValue(); },
        "onPremisesSecurityIdentifier": n => { userSecurityState.onPremisesSecurityIdentifier = n.getStringValue(); },
        "riskScore": n => { userSecurityState.riskScore = n.getStringValue(); },
        "userAccountType": n => { userSecurityState.userAccountType = n.getEnumValue<UserAccountSecurityType>(UserAccountSecurityType); },
        "userPrincipalName": n => { userSecurityState.userPrincipalName = n.getStringValue(); },
    }
}
