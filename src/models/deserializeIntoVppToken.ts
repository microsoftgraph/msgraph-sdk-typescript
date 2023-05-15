import {deserializeIntoEntity} from './deserializeIntoEntity';
import {VppToken} from './vppToken';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVppToken(vppToken: VppToken | undefined = {} as VppToken) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(vppToken),
        "appleId": n => { vppToken.appleId = n.getStringValue(); },
        "automaticallyUpdateApps": n => { vppToken.automaticallyUpdateApps = n.getBooleanValue(); },
        "countryOrRegion": n => { vppToken.countryOrRegion = n.getStringValue(); },
        "expirationDateTime": n => { vppToken.expirationDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { vppToken.lastModifiedDateTime = n.getDateValue(); },
        "lastSyncDateTime": n => { vppToken.lastSyncDateTime = n.getDateValue(); },
        "lastSyncStatus": n => { vppToken.lastSyncStatus = n.getEnumValue<VppTokenSyncStatus>(VppTokenSyncStatus); },
        "organizationName": n => { vppToken.organizationName = n.getStringValue(); },
        "state": n => { vppToken.state = n.getEnumValue<VppTokenState>(VppTokenState); },
        "token": n => { vppToken.token = n.getStringValue(); },
        "vppTokenAccountType": n => { vppToken.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType); },
    }
}
