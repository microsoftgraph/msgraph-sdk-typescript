import {EntityImpl} from './index';
import {MobileAppContentFile} from './mobileAppContentFile';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for a single installer file that is associated with a given mobileAppContent version. */
export class MobileAppContentFileImpl extends EntityImpl implements MobileAppContentFile, Parsable {
    /** The Azure Storage URI. */
    public azureStorageUri?: string | undefined;
    /** The time the Azure storage Uri expires. */
    public azureStorageUriExpirationDateTime?: Date | undefined;
    /** The time the file was created. */
    public createdDateTime?: Date | undefined;
    /** A value indicating whether the file is committed. */
    public isCommitted?: boolean | undefined;
    /** The manifest information. */
    public manifest?: string | undefined;
    /** the file name. */
    public name?: string | undefined;
    /** The size of the file prior to encryption. */
    public size?: number | undefined;
    /** The size of the file after encryption. */
    public sizeEncrypted?: number | undefined;
    /** The state of the current upload request. Possible values are: success, transientError, error, unknown, azureStorageUriRequestSuccess, azureStorageUriRequestPending, azureStorageUriRequestFailed, azureStorageUriRequestTimedOut, azureStorageUriRenewalSuccess, azureStorageUriRenewalPending, azureStorageUriRenewalFailed, azureStorageUriRenewalTimedOut, commitFileSuccess, commitFilePending, commitFileFailed, commitFileTimedOut. */
    public uploadState?: MobileAppContentFileUploadState | undefined;
    /**
     * Instantiates a new mobileAppContentFile and sets the default values.
     * @param mobileAppContentFileParameterValue 
     */
    public constructor(mobileAppContentFileParameterValue?: MobileAppContentFile | undefined) {
        super();
        this.azureStorageUri = mobileAppContentFileParameterValue?.azureStorageUri ;
        this.azureStorageUriExpirationDateTime = mobileAppContentFileParameterValue?.azureStorageUriExpirationDateTime ;
        this.createdDateTime = mobileAppContentFileParameterValue?.createdDateTime ;
        this.isCommitted = mobileAppContentFileParameterValue?.isCommitted ;
        this.manifest = mobileAppContentFileParameterValue?.manifest ;
        this.name = mobileAppContentFileParameterValue?.name ;
        this.size = mobileAppContentFileParameterValue?.size ;
        this.sizeEncrypted = mobileAppContentFileParameterValue?.sizeEncrypted ;
        this.uploadState = mobileAppContentFileParameterValue?.uploadState ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "azureStorageUri": n => { this.azureStorageUri = n.getStringValue(); },
            "azureStorageUriExpirationDateTime": n => { this.azureStorageUriExpirationDateTime = n.getDateValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "isCommitted": n => { this.isCommitted = n.getBooleanValue(); },
            "manifest": n => { this.manifest = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "size": n => { this.size = n.getNumberValue(); },
            "sizeEncrypted": n => { this.sizeEncrypted = n.getNumberValue(); },
            "uploadState": n => { this.uploadState = n.getEnumValue<MobileAppContentFileUploadState>(MobileAppContentFileUploadState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.azureStorageUri){
        writer.writeStringValue("azureStorageUri", this.azureStorageUri);
        }
        if(this.azureStorageUriExpirationDateTime){
        writer.writeDateValue("azureStorageUriExpirationDateTime", this.azureStorageUriExpirationDateTime);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.isCommitted){
        writer.writeBooleanValue("isCommitted", this.isCommitted);
        }
        if(this.manifest){
        writer.writeStringValue("manifest", this.manifest);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
        if(this.sizeEncrypted){
        writer.writeNumberValue("sizeEncrypted", this.sizeEncrypted);
        }
        if(this.uploadState){
        writer.writeEnumValue<MobileAppContentFileUploadState>("uploadState", this.uploadState);
        }
    };
}
