import {AlternativeSecurityIdCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlternativeSecurityIdCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlternativeSecurityIdCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlternativeSecurityIdCollectionResponse();
}
