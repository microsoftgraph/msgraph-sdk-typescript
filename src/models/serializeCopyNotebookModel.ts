import { type CopyNotebookModel } from './copyNotebookModel';
import { type IdentitySet } from './identitySet';
import { type NotebookLinks } from './notebookLinks';
import { OnenoteUserRole } from './onenoteUserRole';
import { serializeIdentitySet } from './serializeIdentitySet';
import { serializeNotebookLinks } from './serializeNotebookLinks';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCopyNotebookModel(writer: SerializationWriter, copyNotebookModel: CopyNotebookModel | undefined = {} as CopyNotebookModel) : void {
        writer.writeStringValue("createdBy", copyNotebookModel.createdBy);
        writer.writeObjectValue<IdentitySet>("createdByIdentity", copyNotebookModel.createdByIdentity, serializeIdentitySet);
        writer.writeDateValue("createdTime", copyNotebookModel.createdTime);
        writer.writeStringValue("id", copyNotebookModel.id);
        writer.writeBooleanValue("isDefault", copyNotebookModel.isDefault);
        writer.writeBooleanValue("isShared", copyNotebookModel.isShared);
        writer.writeStringValue("lastModifiedBy", copyNotebookModel.lastModifiedBy);
        writer.writeObjectValue<IdentitySet>("lastModifiedByIdentity", copyNotebookModel.lastModifiedByIdentity, serializeIdentitySet);
        writer.writeDateValue("lastModifiedTime", copyNotebookModel.lastModifiedTime);
        writer.writeObjectValue<NotebookLinks>("links", copyNotebookModel.links, serializeNotebookLinks);
        writer.writeStringValue("name", copyNotebookModel.name);
        writer.writeStringValue("@odata.type", copyNotebookModel.odataType);
        writer.writeStringValue("sectionGroupsUrl", copyNotebookModel.sectionGroupsUrl);
        writer.writeStringValue("sectionsUrl", copyNotebookModel.sectionsUrl);
        writer.writeStringValue("self", copyNotebookModel.self);
        writer.writeEnumValue<OnenoteUserRole>("userRole", copyNotebookModel.userRole);
        writer.writeAdditionalData(copyNotebookModel.additionalData);
}
