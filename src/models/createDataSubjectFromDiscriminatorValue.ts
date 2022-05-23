import {DataSubjectImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSubjectFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataSubjectImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataSubjectImpl();
}
