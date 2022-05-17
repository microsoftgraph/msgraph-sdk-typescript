import {createDeviceExchangeAccessStateSummaryFromDiscriminatorValue} from './createDeviceExchangeAccessStateSummaryFromDiscriminatorValue';
import {createDeviceOperatingSystemSummaryFromDiscriminatorValue} from './createDeviceOperatingSystemSummaryFromDiscriminatorValue';
import {DeviceExchangeAccessStateSummary} from './deviceExchangeAccessStateSummary';
import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {DeviceExchangeAccessStateSummaryImpl, DeviceOperatingSystemSummaryImpl, EntityImpl} from './index';
import {ManagedDeviceOverview} from './managedDeviceOverview';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedDeviceOverviewImpl extends EntityImpl implements ManagedDeviceOverview, Parsable {
    /** Distribution of Exchange Access State in Intune */
    deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary | undefined;
    /** Device operating system summary. */
    deviceOperatingSystemSummary?: DeviceOperatingSystemSummary | undefined;
    /** The number of devices enrolled in both MDM and EAS */
    dualEnrolledDeviceCount?: number | undefined;
    /** Total enrolled device count. Does not include PC devices managed via Intune PC Agent */
    enrolledDeviceCount?: number | undefined;
    /** The number of devices enrolled in MDM */
    mdmEnrolledCount?: number | undefined;
    /**
     * Instantiates a new managedDeviceOverview and sets the default values.
     * @param managedDeviceOverviewParameterValue 
     */
    public constructor(managedDeviceOverviewParameterValue?: ManagedDeviceOverview | undefined) {
        super();
        this.deviceExchangeAccessStateSummary = managedDeviceOverviewParameterValue?.deviceExchangeAccessStateSummary ;
        this.deviceOperatingSystemSummary = managedDeviceOverviewParameterValue?.deviceOperatingSystemSummary ;
        this.dualEnrolledDeviceCount = managedDeviceOverviewParameterValue?.dualEnrolledDeviceCount ;
        this.enrolledDeviceCount = managedDeviceOverviewParameterValue?.enrolledDeviceCount ;
        this.mdmEnrolledCount = managedDeviceOverviewParameterValue?.mdmEnrolledCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceExchangeAccessStateSummary": n => { this.deviceExchangeAccessStateSummary = n.getObjectValue<DeviceExchangeAccessStateSummaryImpl>(createDeviceExchangeAccessStateSummaryFromDiscriminatorValue); },
            "deviceOperatingSystemSummary": n => { this.deviceOperatingSystemSummary = n.getObjectValue<DeviceOperatingSystemSummaryImpl>(createDeviceOperatingSystemSummaryFromDiscriminatorValue); },
            "dualEnrolledDeviceCount": n => { this.dualEnrolledDeviceCount = n.getNumberValue(); },
            "enrolledDeviceCount": n => { this.enrolledDeviceCount = n.getNumberValue(); },
            "mdmEnrolledCount": n => { this.mdmEnrolledCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceExchangeAccessStateSummary){
        if(this.deviceExchangeAccessStateSummary)
        writer.writeObjectValue<DeviceExchangeAccessStateSummaryImpl>("deviceExchangeAccessStateSummary", new DeviceExchangeAccessStateSummaryImpl(this.deviceExchangeAccessStateSummary));
        }
        if(this.deviceOperatingSystemSummary){
        if(this.deviceOperatingSystemSummary)
        writer.writeObjectValue<DeviceOperatingSystemSummaryImpl>("deviceOperatingSystemSummary", new DeviceOperatingSystemSummaryImpl(this.deviceOperatingSystemSummary));
        }
        if(this.dualEnrolledDeviceCount){
        if(this.dualEnrolledDeviceCount)
        writer.writeNumberValue("dualEnrolledDeviceCount", this.dualEnrolledDeviceCount);
        }
        if(this.enrolledDeviceCount){
        if(this.enrolledDeviceCount)
        writer.writeNumberValue("enrolledDeviceCount", this.enrolledDeviceCount);
        }
        if(this.mdmEnrolledCount){
        if(this.mdmEnrolledCount)
        writer.writeNumberValue("mdmEnrolledCount", this.mdmEnrolledCount);
        }
    };
}
