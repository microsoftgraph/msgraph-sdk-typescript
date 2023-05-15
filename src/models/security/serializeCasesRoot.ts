import {serializeEntity} from '../serializeEntity';
import {CasesRoot} from './casesRoot';
import {EdiscoveryCase} from './ediscoveryCase';
import {serializeEdiscoveryCase} from './serializeEdiscoveryCase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCasesRoot(writer: SerializationWriter, casesRoot: CasesRoot | undefined = {} as CasesRoot) : void {
        serializeEntity(writer, casesRoot)
        writer.writeCollectionOfObjectValues<EdiscoveryCase>("ediscoveryCases", casesRoot.ediscoveryCases, serializeEdiscoveryCase);
}
