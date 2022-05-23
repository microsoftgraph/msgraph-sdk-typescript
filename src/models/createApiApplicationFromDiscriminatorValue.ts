import {ApiApplicationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApiApplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApiApplicationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApiApplicationImpl();
}
