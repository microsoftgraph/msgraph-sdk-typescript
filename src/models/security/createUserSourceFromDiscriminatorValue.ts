import {UserSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSource();
}
