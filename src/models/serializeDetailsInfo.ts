import {DetailsInfo} from './detailsInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDetailsInfo(detailsInfo: DetailsInfo | undefined = {} as DetailsInfo, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", detailsInfo.odataType);
        writer.writeAdditionalData(detailsInfo.additionalData);
}
