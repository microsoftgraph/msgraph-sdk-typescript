import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import {createPublicInnerErrorFromDiscriminatorValue} from './createPublicInnerErrorFromDiscriminatorValue';
import {PublicError} from './publicError';
import {PublicErrorDetail} from './publicErrorDetail';
import {PublicInnerError} from './publicInnerError';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import {serializePublicInnerError} from './serializePublicInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicError(publicError: PublicError | undefined = {} as PublicError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { publicError.code = n.getStringValue(); },
        "details": n => { publicError.details = n.getCollectionOfObjectValues<PublicErrorDetail>(createPublicErrorDetailFromDiscriminatorValue); },
        "innerError": n => { publicError.innerError = n.getObjectValue<PublicInnerError>(createPublicInnerErrorFromDiscriminatorValue); },
        "message": n => { publicError.message = n.getStringValue(); },
        "@odata.type": n => { publicError.odataType = n.getStringValue(); },
        "target": n => { publicError.target = n.getStringValue(); },
    }
}
