import {CopyNotebookModel} from './copyNotebookModel';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl, NotebookLinksImpl} from './index';
import {NotebookLinks} from './notebookLinks';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CopyNotebookModelImpl implements AdditionalDataHolder, CopyNotebookModel, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The createdBy property */
    public createdBy?: string | undefined;
    /** The createdByIdentity property */
    public createdByIdentity?: IdentitySet | undefined;
    /** The createdTime property */
    public createdTime?: Date | undefined;
    /** The id property */
    public id?: string | undefined;
    /** The isDefault property */
    public isDefault?: boolean | undefined;
    /** The isShared property */
    public isShared?: boolean | undefined;
    /** The lastModifiedBy property */
    public lastModifiedBy?: string | undefined;
    /** The lastModifiedByIdentity property */
    public lastModifiedByIdentity?: IdentitySet | undefined;
    /** The lastModifiedTime property */
    public lastModifiedTime?: Date | undefined;
    /** The links property */
    public links?: NotebookLinks | undefined;
    /** The name property */
    public name?: string | undefined;
    /** The sectionGroupsUrl property */
    public sectionGroupsUrl?: string | undefined;
    /** The sectionsUrl property */
    public sectionsUrl?: string | undefined;
    /** The self property */
    public self?: string | undefined;
    /** The userRole property */
    public userRole?: OnenoteUserRole | undefined;
    /**
     * Instantiates a new CopyNotebookModel and sets the default values.
     * @param copyNotebookModelParameterValue 
     */
    public constructor(copyNotebookModelParameterValue?: CopyNotebookModel | undefined) {
        this.additionalData = copyNotebookModelParameterValue?.additionalData ? copyNotebookModelParameterValue?.additionalData! : {}
        this.createdBy = copyNotebookModelParameterValue?.createdBy ;
        this.createdByIdentity = copyNotebookModelParameterValue?.createdByIdentity ;
        this.createdTime = copyNotebookModelParameterValue?.createdTime ;
        this.id = copyNotebookModelParameterValue?.id ;
        this.isDefault = copyNotebookModelParameterValue?.isDefault ;
        this.isShared = copyNotebookModelParameterValue?.isShared ;
        this.lastModifiedBy = copyNotebookModelParameterValue?.lastModifiedBy ;
        this.lastModifiedByIdentity = copyNotebookModelParameterValue?.lastModifiedByIdentity ;
        this.lastModifiedTime = copyNotebookModelParameterValue?.lastModifiedTime ;
        this.links = copyNotebookModelParameterValue?.links ;
        this.name = copyNotebookModelParameterValue?.name ;
        this.sectionGroupsUrl = copyNotebookModelParameterValue?.sectionGroupsUrl ;
        this.sectionsUrl = copyNotebookModelParameterValue?.sectionsUrl ;
        this.self = copyNotebookModelParameterValue?.self ;
        this.userRole = copyNotebookModelParameterValue?.userRole ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdBy": n => { this.createdBy = n.getStringValue(); },
            "createdByIdentity": n => { this.createdByIdentity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdTime": n => { this.createdTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isShared": n => { this.isShared = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getStringValue(); },
            "lastModifiedByIdentity": n => { this.lastModifiedByIdentity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedTime": n => { this.lastModifiedTime = n.getDateValue(); },
            "links": n => { this.links = n.getObjectValue<NotebookLinksImpl>(createNotebookLinksFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "sectionGroupsUrl": n => { this.sectionGroupsUrl = n.getStringValue(); },
            "sectionsUrl": n => { this.sectionsUrl = n.getStringValue(); },
            "self": n => { this.self = n.getStringValue(); },
            "userRole": n => { this.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdBy){
        writer.writeStringValue("createdBy", this.createdBy);
        }
        if(this.createdByIdentity){
        writer.writeObjectValue<IdentitySetImpl>("createdByIdentity", new IdentitySetImpl(this.createdByIdentity));
        }
        if(this.createdTime){
        writer.writeDateValue("createdTime", this.createdTime);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.isDefault){
        writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.isShared){
        writer.writeBooleanValue("isShared", this.isShared);
        }
        if(this.lastModifiedBy){
        writer.writeStringValue("lastModifiedBy", this.lastModifiedBy);
        }
        if(this.lastModifiedByIdentity){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedByIdentity", new IdentitySetImpl(this.lastModifiedByIdentity));
        }
        if(this.lastModifiedTime){
        writer.writeDateValue("lastModifiedTime", this.lastModifiedTime);
        }
        if(this.links){
        writer.writeObjectValue<NotebookLinksImpl>("links", new NotebookLinksImpl(this.links));
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.sectionGroupsUrl){
        writer.writeStringValue("sectionGroupsUrl", this.sectionGroupsUrl);
        }
        if(this.sectionsUrl){
        writer.writeStringValue("sectionsUrl", this.sectionsUrl);
        }
        if(this.self){
        writer.writeStringValue("self", this.self);
        }
        if(this.userRole){
        writer.writeEnumValue<OnenoteUserRole>("userRole", this.userRole);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
