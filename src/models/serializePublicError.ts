import {PublicError} from './publicError';
import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import {serializePublicInnerError} from './serializePublicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicError(writer: SerializationWriter, publicError: PublicError | undefined = {} as PublicError) : void {
        writer.writeStringValue("code", publicError.code);
        writer.writeCollectionOfObjectValues<PublicErrorDetail>("details", publicError.details, serializePublicErrorDetail);
        writer.writeObjectValue<PublicInnerError>("innerError", publicError.innerError, serializePublicInnerError);
        writer.writeStringValue("message", publicError.message);
        writer.writeStringValue("@odata.type", publicError.odataType);
        writer.writeStringValue("target", publicError.target);
        writer.writeAdditionalData(publicError.additionalData);
}
