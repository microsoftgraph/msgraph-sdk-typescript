import {createMailFolderFromDiscriminatorValue} from '../../../../../models/createMailFolderFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {MailFolder} from '../../../../../models/mailFolder';
import {serializeMailFolder} from '../../../../../models/serializeMailFolder';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<MailFolder>(createMailFolderFromDiscriminatorValue); },
    }
}
