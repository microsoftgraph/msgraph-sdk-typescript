import {createPublicErrorFromDiscriminatorValue} from '../createPublicErrorFromDiscriminatorValue';
import {PublicError} from '../publicError';
import {serializePublicError} from '../serializePublicError';
import {deserializeIntoExternalActivity} from './deserializeIntoExternalActivity';
import {ExternalActivityResult} from './externalActivityResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalActivityResult(externalActivityResult: ExternalActivityResult | undefined = {} as ExternalActivityResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoExternalActivity(externalActivityResult),
        "error": n => { externalActivityResult.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
    }
}
