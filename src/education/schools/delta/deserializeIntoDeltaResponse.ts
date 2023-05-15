import {createEducationSchoolFromDiscriminatorValue} from '../../../models/createEducationSchoolFromDiscriminatorValue';
import {deserializeIntoBaseDeltaFunctionResponse} from '../../../models/deserializeIntoBaseDeltaFunctionResponse';
import {EducationSchool} from '../../../models/educationSchool';
import {serializeEducationSchool} from '../../../models/serializeEducationSchool';
import {DeltaResponse} from './deltaResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeltaResponse(deltaResponse: DeltaResponse | undefined = {} as DeltaResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaResponse),
        "value": n => { deltaResponse.value = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
    }
}
