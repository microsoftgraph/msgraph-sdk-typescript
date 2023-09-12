import { serializeEntity } from '../serializeEntity';
import { type CasesRoot } from './casesRoot';
import { type EdiscoveryCase } from './ediscoveryCase';
import { serializeEdiscoveryCase } from './serializeEdiscoveryCase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCasesRoot(writer: SerializationWriter, casesRoot: CasesRoot | undefined = {} as CasesRoot) : void {
        serializeEntity(writer, casesRoot)
        writer.writeCollectionOfObjectValues<EdiscoveryCase>("ediscoveryCases", casesRoot.ediscoveryCases, serializeEdiscoveryCase);
}
