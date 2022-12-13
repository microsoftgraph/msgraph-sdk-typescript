import {SinglePropertySchemaCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSinglePropertySchemaCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SinglePropertySchemaCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SinglePropertySchemaCollectionResponse();
}
