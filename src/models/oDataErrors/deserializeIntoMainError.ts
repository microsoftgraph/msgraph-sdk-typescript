import {createErrorDetailsFromDiscriminatorValue} from './createErrorDetailsFromDiscriminatorValue';
import {createInnerErrorFromDiscriminatorValue} from './createInnerErrorFromDiscriminatorValue';
import {ErrorDetails} from './errorDetails';
import {InnerError} from './innerError';
import {MainError} from './mainError';
import {serializeErrorDetails} from './serializeErrorDetails';
import {serializeInnerError} from './serializeInnerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMainError(mainError: MainError | undefined = {} as MainError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { mainError.code = n.getStringValue(); },
        "details": n => { mainError.details = n.getCollectionOfObjectValues<ErrorDetails>(createErrorDetailsFromDiscriminatorValue); },
        "innerError": n => { mainError.innerError = n.getObjectValue<InnerError>(createInnerErrorFromDiscriminatorValue); },
        "message": n => { mainError.message = n.getStringValue(); },
        "target": n => { mainError.target = n.getStringValue(); },
    }
}
