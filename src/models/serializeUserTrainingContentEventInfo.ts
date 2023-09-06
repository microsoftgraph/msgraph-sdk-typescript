import { type UserTrainingContentEventInfo } from './userTrainingContentEventInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserTrainingContentEventInfo(writer: SerializationWriter, userTrainingContentEventInfo: UserTrainingContentEventInfo | undefined = {} as UserTrainingContentEventInfo) : void {
        writer.writeStringValue("browser", userTrainingContentEventInfo.browser);
        writer.writeDateValue("contentDateTime", userTrainingContentEventInfo.contentDateTime);
        writer.writeStringValue("ipAddress", userTrainingContentEventInfo.ipAddress);
        writer.writeStringValue("@odata.type", userTrainingContentEventInfo.odataType);
        writer.writeStringValue("osPlatformDeviceDetails", userTrainingContentEventInfo.osPlatformDeviceDetails);
        writer.writeNumberValue("potentialScoreImpact", userTrainingContentEventInfo.potentialScoreImpact);
        writer.writeAdditionalData(userTrainingContentEventInfo.additionalData);
}
