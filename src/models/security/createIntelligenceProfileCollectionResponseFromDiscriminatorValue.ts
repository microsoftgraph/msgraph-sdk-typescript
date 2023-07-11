import {deserializeIntoIntelligenceProfileCollectionResponse} from './deserializeIntoIntelligenceProfileCollectionResponse';
import {IntelligenceProfileCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIntelligenceProfileCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIntelligenceProfileCollectionResponse;
}
