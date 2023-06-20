import {CopyNotebookModel} from './copyNotebookModel';
import {IdentitySet} from './identitySet';
import {NotebookLinks} from './notebookLinks';
import {OnenoteUserRole} from './onenoteUserRole';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeNotebookLinks} from './serializeNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCopyNotebookModel(copyNotebookModel: CopyNotebookModel | undefined = {} as CopyNotebookModel, writer: SerializationWriter) : void {
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
