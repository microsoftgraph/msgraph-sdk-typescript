import { createMailFolderFromDiscriminatorValue } from '../../../../../../models/createMailFolderFromDiscriminatorValue';
import { deserializeIntoBaseDeltaFunctionResponse } from '../../../../../../models/deserializeIntoBaseDeltaFunctionResponse';
import { type MailFolder } from '../../../../../../models/mailFolder';
import { serializeMailFolder } from '../../../../../../models/serializeMailFolder';
import { type DeltaResponse } from './deltaResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<MailFolder>(createMailFolderFromDiscriminatorValue); },
    }
}
