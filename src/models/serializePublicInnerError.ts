import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicInnerError(writer: SerializationWriter, publicInnerError: PublicInnerError | undefined = {} as PublicInnerError) : void {
        writer.writeStringValue("code", publicInnerError.code);
        writer.writeCollectionOfObjectValues<PublicErrorDetail>("details", publicInnerError.details, serializePublicErrorDetail);
        writer.writeStringValue("message", publicInnerError.message);
        writer.writeStringValue("@odata.type", publicInnerError.odataType);
        writer.writeStringValue("target", publicInnerError.target);
        writer.writeAdditionalData(publicInnerError.additionalData);
}
