import { type PublicErrorDetail } from './publicErrorDetail';
import { type PublicInnerError } from './publicInnerError';
import { serializePublicErrorDetail } from './serializePublicErrorDetail';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePublicInnerError(writer: SerializationWriter, publicInnerError: PublicInnerError | undefined = {} as PublicInnerError) : void {
        writer.writeStringValue("code", publicInnerError.code);
        writer.writeCollectionOfObjectValues<PublicErrorDetail>("details", publicInnerError.details, serializePublicErrorDetail);
        writer.writeStringValue("message", publicInnerError.message);
        writer.writeStringValue("@odata.type", publicInnerError.odataType);
        writer.writeStringValue("target", publicInnerError.target);
        writer.writeAdditionalData(publicInnerError.additionalData);
}
