import {OsVersionCount} from './osVersionCount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOsVersionCount(osVersionCount: OsVersionCount | undefined = {} as OsVersionCount) : Record<string, (node: ParseNode) => void> {
    return {
        "deviceCount": n => { osVersionCount.deviceCount = n.getNumberValue(); },
        "lastUpdateDateTime": n => { osVersionCount.lastUpdateDateTime = n.getDateValue(); },
        "@odata.type": n => { osVersionCount.odataType = n.getStringValue(); },
        "osVersion": n => { osVersionCount.osVersion = n.getStringValue(); },
    }
}
