import { type ActionResultPart } from '../../../../../../../models/actionResultPart';
import { createActionResultPartFromDiscriminatorValue } from '../../../../../../../models/createActionResultPartFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeActionResultPart } from '../../../../../../../models/serializeActionResultPart';
import { type AddResponse } from './addResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAddResponse(addResponse: AddResponse | undefined = {} as AddResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addResponse),
        "value": n => { addResponse.value = n.getCollectionOfObjectValues<ActionResultPart>(createActionResultPartFromDiscriminatorValue); },
    }
}
