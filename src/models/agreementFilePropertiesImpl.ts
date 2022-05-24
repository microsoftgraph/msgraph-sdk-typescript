import {AgreementFileData} from './agreementFileData';
import {AgreementFileProperties} from './agreementFileProperties';
import {createAgreementFileDataFromDiscriminatorValue} from './createAgreementFileDataFromDiscriminatorValue';
import {AgreementFileDataImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AgreementFilePropertiesImpl extends EntityImpl implements AgreementFileProperties, Parsable {
    /** The date time representing when the file was created.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public createdDateTime?: Date | undefined;
    /** Localized display name of the policy file of an agreement. The localized display name is shown to end users who view the agreement. */
    public displayName?: string | undefined;
    /** Data that represents the terms of use PDF document. Read-only. */
    public fileData?: AgreementFileData | undefined;
    /** Name of the agreement file (for example, TOU.pdf). Read-only. */
    public fileName?: string | undefined;
    /** If none of the languages matches the client preference, indicates whether this is the default agreement file . If none of the files are marked as default, the first one is treated as the default. Read-only. */
    public isDefault?: boolean | undefined;
    /** Indicates whether the agreement file is a major version update. Major version updates invalidate the agreement's acceptances on the corresponding language. */
    public isMajorVersion?: boolean | undefined;
    /** The language of the agreement file in the format 'languagecode2-country/regioncode2'. 'languagecode2' is a lowercase two-letter code derived from ISO 639-1, while 'country/regioncode2' is derived from ISO 3166 and usually consists of two uppercase letters, or a BCP-47 language tag. For example, U.S. English is en-US. Read-only. */
    public language?: string | undefined;
    /**
     * Instantiates a new agreementFileProperties and sets the default values.
     * @param agreementFilePropertiesParameterValue 
     */
    public constructor(agreementFilePropertiesParameterValue?: AgreementFileProperties | undefined) {
        super();
        this.createdDateTime = agreementFilePropertiesParameterValue?.createdDateTime ;
        this.displayName = agreementFilePropertiesParameterValue?.displayName ;
        this.fileData = agreementFilePropertiesParameterValue?.fileData ;
        this.fileName = agreementFilePropertiesParameterValue?.fileName ;
        this.isDefault = agreementFilePropertiesParameterValue?.isDefault ;
        this.isMajorVersion = agreementFilePropertiesParameterValue?.isMajorVersion ;
        this.language = agreementFilePropertiesParameterValue?.language ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "fileData": n => { this.fileData = n.getObjectValue<AgreementFileDataImpl>(createAgreementFileDataFromDiscriminatorValue); },
            "fileName": n => { this.fileName = n.getStringValue(); },
            "isDefault": n => { this.isDefault = n.getBooleanValue(); },
            "isMajorVersion": n => { this.isMajorVersion = n.getBooleanValue(); },
            "language": n => { this.language = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.fileData){
        writer.writeObjectValue<AgreementFileDataImpl>("fileData", new AgreementFileDataImpl(this.fileData));
        }
        if(this.fileName){
        writer.writeStringValue("fileName", this.fileName);
        }
        if(this.isDefault){
        writer.writeBooleanValue("isDefault", this.isDefault);
        }
        if(this.isMajorVersion){
        writer.writeBooleanValue("isMajorVersion", this.isMajorVersion);
        }
        if(this.language){
        writer.writeStringValue("language", this.language);
        }
    };
}
