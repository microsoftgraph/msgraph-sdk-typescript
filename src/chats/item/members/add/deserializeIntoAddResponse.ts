import {ActionResultPart} from '../../../../models/actionResultPart';
import {createActionResultPartFromDiscriminatorValue} from '../../../../models/createActionResultPartFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeActionResultPart} from '../../../../models/serializeActionResultPart';
import {AddResponse} from './addResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddResponse(addResponse: AddResponse | undefined = {} as AddResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addResponse),
        "value": n => { addResponse.value = n.getCollectionOfObjectValues<ActionResultPart>(createActionResultPartFromDiscriminatorValue); },
    }
}
