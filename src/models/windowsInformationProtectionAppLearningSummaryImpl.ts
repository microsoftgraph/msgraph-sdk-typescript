import {ApplicationType} from './applicationType';
import {EntityImpl} from './index';
import {WindowsInformationProtectionAppLearningSummary} from './windowsInformationProtectionAppLearningSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection AppLearning Summary entity. */
export class WindowsInformationProtectionAppLearningSummaryImpl extends EntityImpl implements WindowsInformationProtectionAppLearningSummary {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Application Name */
    public applicationName?: string | undefined;
    /** Application Type. Possible values are: universal, desktop. */
    public applicationType?: ApplicationType | undefined;
    /** Device Count */
    public deviceCount?: number | undefined;
    /**
     * Instantiates a new windowsInformationProtectionAppLearningSummary and sets the default values.
     * @param windowsInformationProtectionAppLearningSummaryParameterValue 
     */
    public constructor(windowsInformationProtectionAppLearningSummaryParameterValue?: WindowsInformationProtectionAppLearningSummary | undefined) {
        super(windowsInformationProtectionAppLearningSummaryParameterValue);
        this.additionalData = windowsInformationProtectionAppLearningSummaryParameterValue?.additionalData ? windowsInformationProtectionAppLearningSummaryParameterValue?.additionalData! : {};
        this.applicationName = windowsInformationProtectionAppLearningSummaryParameterValue?.applicationName;
        this.applicationType = windowsInformationProtectionAppLearningSummaryParameterValue?.applicationType;
        this.deviceCount = windowsInformationProtectionAppLearningSummaryParameterValue?.deviceCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicationName": n => { this.applicationName = n.getStringValue(); },
            "applicationType": n => { this.applicationType = n.getEnumValue<ApplicationType>(ApplicationType); },
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicationName){
            writer.writeStringValue("applicationName", this.applicationName);
        }
        if(this.applicationType){
            writer.writeEnumValue<ApplicationType>("applicationType", this.applicationType);
        }
        if(this.deviceCount){
            writer.writeNumberValue("deviceCount", this.deviceCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
