import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimelineTick } from "../types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../util";

export default function Timeline({ events }: { events: TimelineTick[] }) {
  return (
    <div className="timeline">
      {events.map((item: TimelineTick, index: number) => (
        <div key={index} className={`timelineItem ${item.completed ? 'completed': 'pending'}`}>
          {item.completed ? (
            <span className="tick">
              <FontAwesomeIcon icon={faCheck} color="white" />
            </span>
          ) : (
            <span className="tickPending"></span>
          )}
          <div>
          <p className="eventTitle">{item.event}</p>
          <p className="eventDate textMuted m-0">{formatDate(item.eventDate)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}