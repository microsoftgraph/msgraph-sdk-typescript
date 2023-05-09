import {serializeEntity} from './serializeEntity';
import {VppToken} from './vppToken';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeVppToken(writer: SerializationWriter, vppToken: VppToken | undefined = {} as VppToken) : void {
        serializeEntity(writer, vppToken)
        writer.writeStringValue("appleId", vppToken.appleId);
        writer.writeBooleanValue("automaticallyUpdateApps", vppToken.automaticallyUpdateApps);
        writer.writeStringValue("countryOrRegion", vppToken.countryOrRegion);
        writer.writeDateValue("expirationDateTime", vppToken.expirationDateTime);
        writer.writeDateValue("lastModifiedDateTime", vppToken.lastModifiedDateTime);
        writer.writeDateValue("lastSyncDateTime", vppToken.lastSyncDateTime);
        writer.writeEnumValue<VppTokenSyncStatus>("lastSyncStatus", vppToken.lastSyncStatus);
        writer.writeStringValue("organizationName", vppToken.organizationName);
        writer.writeEnumValue<VppTokenState>("state", vppToken.state);
        writer.writeStringValue("token", vppToken.token);
        writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", vppToken.vppTokenAccountType);
}
