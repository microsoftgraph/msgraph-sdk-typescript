import {createPublicErrorDetailFromDiscriminatorValue} from './createPublicErrorDetailFromDiscriminatorValue';
import type {PublicErrorDetail} from './publicErrorDetail';
import type {PublicInnerError} from './publicInnerError';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicInnerError(publicInnerError: PublicInnerError | undefined = {} as PublicInnerError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { publicInnerError.code = n.getStringValue(); },
        "details": n => { publicInnerError.details = n.getCollectionOfObjectValues<PublicErrorDetail>(createPublicErrorDetailFromDiscriminatorValue); },
        "message": n => { publicInnerError.message = n.getStringValue(); },
        "@odata.type": n => { publicInnerError.odataType = n.getStringValue(); },
        "target": n => { publicInnerError.target = n.getStringValue(); },
    }
}
