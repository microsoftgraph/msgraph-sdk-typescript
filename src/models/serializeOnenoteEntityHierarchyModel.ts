import {IdentitySet} from './identitySet';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeOnenoteEntitySchemaObjectModel} from './serializeOnenoteEntitySchemaObjectModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenoteEntityHierarchyModel(writer: SerializationWriter, onenoteEntityHierarchyModel: OnenoteEntityHierarchyModel | undefined = {} as OnenoteEntityHierarchyModel) : void {
        serializeOnenoteEntitySchemaObjectModel(writer, onenoteEntityHierarchyModel)
        writer.writeObjectValue<IdentitySet>("createdBy", onenoteEntityHierarchyModel.createdBy, serializeIdentitySet);
        writer.writeStringValue("displayName", onenoteEntityHierarchyModel.displayName);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", onenoteEntityHierarchyModel.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", onenoteEntityHierarchyModel.lastModifiedDateTime);
}
