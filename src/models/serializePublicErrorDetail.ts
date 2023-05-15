import {PublicErrorDetail} from './publicErrorDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicErrorDetail(writer: SerializationWriter, publicErrorDetail: PublicErrorDetail | undefined = {} as PublicErrorDetail) : void {
        writer.writeStringValue("code", publicErrorDetail.code);
        writer.writeStringValue("message", publicErrorDetail.message);
        writer.writeStringValue("@odata.type", publicErrorDetail.odataType);
        writer.writeStringValue("target", publicErrorDetail.target);
        writer.writeAdditionalData(publicErrorDetail.additionalData);
}
