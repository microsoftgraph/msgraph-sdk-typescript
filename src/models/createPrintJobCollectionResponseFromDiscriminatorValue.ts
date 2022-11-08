import {PrintJobCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintJobCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintJobCollectionResponse();
}
