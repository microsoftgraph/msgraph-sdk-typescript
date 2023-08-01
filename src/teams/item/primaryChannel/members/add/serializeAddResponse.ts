import type {ActionResultPart} from '../../../../../models/actionResultPart';
import {serializeActionResultPart} from '../../../../../models/serializeActionResultPart';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import type {AddResponse} from './addResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddResponse(writer: SerializationWriter, addResponse: AddResponse | undefined = {} as AddResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addResponse)
        writer.writeCollectionOfObjectValues<ActionResultPart>("value", addResponse.value, serializeActionResultPart);
}
