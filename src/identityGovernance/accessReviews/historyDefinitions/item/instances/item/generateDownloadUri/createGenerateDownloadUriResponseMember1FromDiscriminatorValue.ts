import {GenerateDownloadUriResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGenerateDownloadUriResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GenerateDownloadUriResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GenerateDownloadUriResponseMember1();
}
