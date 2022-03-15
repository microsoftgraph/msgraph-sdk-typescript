import {PrintUsageByUserCollectionResponse} from './printUsageByUserCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintUsageByUserCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintUsageByUserCollectionResponse();
}
