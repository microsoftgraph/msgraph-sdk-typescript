import type {EducationCategory} from '../../../../../../models/educationCategory';
import {serializeBaseDeltaFunctionResponse} from '../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeEducationCategory} from '../../../../../../models/serializeEducationCategory';
import type {DeltaResponse} from './deltaResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
        writer.writeCollectionOfObjectValues<EducationCategory>("value", deltaResponse.value, serializeEducationCategory);
}
