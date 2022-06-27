import {DeviceConfigurationImpl} from './index';
import {Windows10SecureAssessmentConfiguration} from './windows10SecureAssessmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10SecureAssessmentConfigurationImpl extends DeviceConfigurationImpl implements Windows10SecureAssessmentConfiguration {
    /** Indicates whether or not to allow the app from printing during the test. */
    public allowPrinting?: boolean | undefined;
    /** Indicates whether or not to allow screen capture capability during a test. */
    public allowScreenCapture?: boolean | undefined;
    /** Indicates whether or not to allow text suggestions during the test. */
    public allowTextSuggestion?: boolean | undefined;
    /** The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user), an AAD account (username@tenant.com) or a local account (username). */
    public configurationAccount?: string | undefined;
    /** Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a valid Url (http[s]://msdn.microsoft.com/). */
    public launchUri?: string | undefined;
    /**
     * Instantiates a new Windows10SecureAssessmentConfiguration and sets the default values.
     * @param windows10SecureAssessmentConfigurationParameterValue 
     */
    public constructor(windows10SecureAssessmentConfigurationParameterValue?: Windows10SecureAssessmentConfiguration | undefined) {
        super(windows10SecureAssessmentConfigurationParameterValue);
        this.allowPrinting = windows10SecureAssessmentConfigurationParameterValue?.allowPrinting;
        this.allowScreenCapture = windows10SecureAssessmentConfigurationParameterValue?.allowScreenCapture;
        this.allowTextSuggestion = windows10SecureAssessmentConfigurationParameterValue?.allowTextSuggestion;
        this.configurationAccount = windows10SecureAssessmentConfigurationParameterValue?.configurationAccount;
        this.launchUri = windows10SecureAssessmentConfigurationParameterValue?.launchUri;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowPrinting": n => { this.allowPrinting = n.getBooleanValue(); },
            "allowScreenCapture": n => { this.allowScreenCapture = n.getBooleanValue(); },
            "allowTextSuggestion": n => { this.allowTextSuggestion = n.getBooleanValue(); },
            "configurationAccount": n => { this.configurationAccount = n.getStringValue(); },
            "launchUri": n => { this.launchUri = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowPrinting){
            writer.writeBooleanValue("allowPrinting", this.allowPrinting);
        }
        if(this.allowScreenCapture){
            writer.writeBooleanValue("allowScreenCapture", this.allowScreenCapture);
        }
        if(this.allowTextSuggestion){
            writer.writeBooleanValue("allowTextSuggestion", this.allowTextSuggestion);
        }
        if(this.configurationAccount){
            writer.writeStringValue("configurationAccount", this.configurationAccount);
        }
        if(this.launchUri){
            writer.writeStringValue("launchUri", this.launchUri);
        }
    };
}
