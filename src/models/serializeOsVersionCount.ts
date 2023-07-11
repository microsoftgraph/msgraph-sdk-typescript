import {OsVersionCount} from './osVersionCount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOsVersionCount(writer: SerializationWriter, osVersionCount: OsVersionCount | undefined = {} as OsVersionCount) : void {
        writer.writeNumberValue("deviceCount", osVersionCount.deviceCount);
        writer.writeDateValue("lastUpdateDateTime", osVersionCount.lastUpdateDateTime);
        writer.writeStringValue("@odata.type", osVersionCount.odataType);
        writer.writeStringValue("osVersion", osVersionCount.osVersion);
        writer.writeAdditionalData(osVersionCount.additionalData);
}
