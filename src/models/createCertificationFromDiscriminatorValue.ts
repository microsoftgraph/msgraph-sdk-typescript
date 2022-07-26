import {Certification} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCertificationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Certification {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Certification();
}
