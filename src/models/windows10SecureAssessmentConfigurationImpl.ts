import {DeviceConfigurationImpl} from './index';
import {Windows10SecureAssessmentConfiguration} from './windows10SecureAssessmentConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10SecureAssessmentConfigurationImpl extends DeviceConfigurationImpl implements Windows10SecureAssessmentConfiguration {
    /** Indicates whether or not to allow the app from printing during the test. */
    private _allowPrinting?: boolean | undefined;
    /** Indicates whether or not to allow screen capture capability during a test. */
    private _allowScreenCapture?: boolean | undefined;
    /** Indicates whether or not to allow text suggestions during the test. */
    private _allowTextSuggestion?: boolean | undefined;
    /** The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user), an AAD account (username@tenant.com) or a local account (username). */
    private _configurationAccount?: string | undefined;
    /** Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a valid Url (http[s]://msdn.microsoft.com/). */
    private _launchUri?: string | undefined;
    /**
     * Gets the allowPrinting property value. Indicates whether or not to allow the app from printing during the test.
     * @returns a boolean
     */
    public get allowPrinting() {
        return this._allowPrinting;
    };
    /**
     * Sets the allowPrinting property value. Indicates whether or not to allow the app from printing during the test.
     * @param value Value to set for the allowPrinting property.
     */
    public set allowPrinting(value: boolean | undefined) {
        if(value) {
            this._allowPrinting = value;
        }
    };
    /**
     * Gets the allowScreenCapture property value. Indicates whether or not to allow screen capture capability during a test.
     * @returns a boolean
     */
    public get allowScreenCapture() {
        return this._allowScreenCapture;
    };
    /**
     * Sets the allowScreenCapture property value. Indicates whether or not to allow screen capture capability during a test.
     * @param value Value to set for the allowScreenCapture property.
     */
    public set allowScreenCapture(value: boolean | undefined) {
        if(value) {
            this._allowScreenCapture = value;
        }
    };
    /**
     * Gets the allowTextSuggestion property value. Indicates whether or not to allow text suggestions during the test.
     * @returns a boolean
     */
    public get allowTextSuggestion() {
        return this._allowTextSuggestion;
    };
    /**
     * Sets the allowTextSuggestion property value. Indicates whether or not to allow text suggestions during the test.
     * @param value Value to set for the allowTextSuggestion property.
     */
    public set allowTextSuggestion(value: boolean | undefined) {
        if(value) {
            this._allowTextSuggestion = value;
        }
    };
    /**
     * Gets the configurationAccount property value. The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user), an AAD account (username@tenant.com) or a local account (username).
     * @returns a string
     */
    public get configurationAccount() {
        return this._configurationAccount;
    };
    /**
     * Sets the configurationAccount property value. The account used to configure the Windows device for taking the test. The user can be a domain account (domain/user), an AAD account (username@tenant.com) or a local account (username).
     * @param value Value to set for the configurationAccount property.
     */
    public set configurationAccount(value: string | undefined) {
        if(value) {
            this._configurationAccount = value;
        }
    };
    /**
     * Instantiates a new Windows10SecureAssessmentConfiguration and sets the default values.
     * @param windows10SecureAssessmentConfigurationParameterValue 
     */
    public constructor(windows10SecureAssessmentConfigurationParameterValue?: Windows10SecureAssessmentConfiguration | undefined) {
        super(windows10SecureAssessmentConfigurationParameterValue);
        this._allowPrinting = windows10SecureAssessmentConfigurationParameterValue?.allowPrinting;
        this._allowScreenCapture = windows10SecureAssessmentConfigurationParameterValue?.allowScreenCapture;
        this._allowTextSuggestion = windows10SecureAssessmentConfigurationParameterValue?.allowTextSuggestion;
        this._configurationAccount = windows10SecureAssessmentConfigurationParameterValue?.configurationAccount;
        this._launchUri = windows10SecureAssessmentConfigurationParameterValue?.launchUri;
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
     * Gets the launchUri property value. Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a valid Url (http[s]://msdn.microsoft.com/).
     * @returns a string
     */
    public get launchUri() {
        return this._launchUri;
    };
    /**
     * Sets the launchUri property value. Url link to an assessment that's automatically loaded when the secure assessment browser is launched. It has to be a valid Url (http[s]://msdn.microsoft.com/).
     * @param value Value to set for the launchUri property.
     */
    public set launchUri(value: string | undefined) {
        if(value) {
            this._launchUri = value;
        }
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
