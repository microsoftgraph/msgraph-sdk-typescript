import { type DetailsInfo } from './detailsInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDetailsInfo(writer: SerializationWriter, detailsInfo: DetailsInfo | undefined = {} as DetailsInfo) : void {
        writer.writeStringValue("@odata.type", detailsInfo.odataType);
        writer.writeAdditionalData(detailsInfo.additionalData);
}
