import {EmailRole} from './emailRole';
import {LogonType} from './logonType';
import {UserAccountSecurityType} from './userAccountSecurityType';
import {UserSecurityState} from './userSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSecurityState(writer: SerializationWriter, userSecurityState: UserSecurityState | undefined = {} as UserSecurityState) : void {
        writer.writeStringValue("aadUserId", userSecurityState.aadUserId);
        writer.writeStringValue("accountName", userSecurityState.accountName);
        writer.writeStringValue("domainName", userSecurityState.domainName);
        writer.writeEnumValue<EmailRole>("emailRole", userSecurityState.emailRole);
        writer.writeBooleanValue("isVpn", userSecurityState.isVpn);
        writer.writeDateValue("logonDateTime", userSecurityState.logonDateTime);
        writer.writeStringValue("logonId", userSecurityState.logonId);
        writer.writeStringValue("logonIp", userSecurityState.logonIp);
        writer.writeStringValue("logonLocation", userSecurityState.logonLocation);
        writer.writeEnumValue<LogonType>("logonType", userSecurityState.logonType);
        writer.writeStringValue("@odata.type", userSecurityState.odataType);
        writer.writeStringValue("onPremisesSecurityIdentifier", userSecurityState.onPremisesSecurityIdentifier);
        writer.writeStringValue("riskScore", userSecurityState.riskScore);
        writer.writeEnumValue<UserAccountSecurityType>("userAccountType", userSecurityState.userAccountType);
        writer.writeStringValue("userPrincipalName", userSecurityState.userPrincipalName);
        writer.writeAdditionalData(userSecurityState.additionalData);
}
