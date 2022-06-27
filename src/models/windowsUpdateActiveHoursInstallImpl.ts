import {WindowsUpdateInstallScheduleTypeImpl} from './index';
import {WindowsUpdateActiveHoursInstall} from './windowsUpdateActiveHoursInstall';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WindowsUpdateActiveHoursInstallImpl extends WindowsUpdateInstallScheduleTypeImpl implements WindowsUpdateActiveHoursInstall {
    /** Active Hours End */
    public activeHoursEnd?: TimeOnly | undefined;
    /** Active Hours Start */
    public activeHoursStart?: TimeOnly | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new WindowsUpdateActiveHoursInstall and sets the default values.
     * @param windowsUpdateActiveHoursInstallParameterValue 
     */
    public constructor(windowsUpdateActiveHoursInstallParameterValue?: WindowsUpdateActiveHoursInstall | undefined) {
        super(windowsUpdateActiveHoursInstallParameterValue);
        this.activeHoursEnd = windowsUpdateActiveHoursInstallParameterValue?.activeHoursEnd;
        this.activeHoursStart = windowsUpdateActiveHoursInstallParameterValue?.activeHoursStart;
        this.additionalData = windowsUpdateActiveHoursInstallParameterValue?.additionalData ? windowsUpdateActiveHoursInstallParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeHoursEnd": n => { this.activeHoursEnd = n.getTimeOnlyValue(); },
            "activeHoursStart": n => { this.activeHoursStart = n.getTimeOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activeHoursEnd){
            writer.writeTimeOnlyValue("activeHoursEnd", this.activeHoursEnd);
        }
        if(this.activeHoursStart){
            writer.writeTimeOnlyValue("activeHoursStart", this.activeHoursStart);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
