import React from "react";

// import { Container } from './styles';

const Navbar: React.FC = () => {
    return (
        <div className="px-8 py-4 border-b-2 border-b-slate-400 border-opacity-10 flex flex-row justify-between items-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAB+ElEQVRYhe2Xv24TQRCHv729IEXgBJCCQEihSSRAooEmHe/hji4tL0GBxFOgPAgvEVEgGQpkgZLIf0IKyzdDEztmb/a85zuTxj/J8mh8u/tpdue3Pthoo2ZyYUKVjB5dHE+RipGx34rE55WfvOTEOXQxnZcG9ugqfDYmSIudnXdh3gGnKHCyuEwW8ohy8C9zDZhI7OLPHIbrl4BKWh+MqWqgdcMY5zAOtG6YSJVsoFuCsYEWy/ifYcBqe2PgdOKRIls6eRWM94L3RSmfBhRMOOjvIlLy0FrKMmXv8UUlTBwoALv/ZIhMs1J+ppRt8l7KeaPLkrYszwvIC3OhWmdm3V3WNgxYFRJK99H4/B5FxZYtlYLPhZ3dy6Vj04wxJZ8yT0KVkrqs8/ByHreyTW3dZa3DrNpl04lHJW6MlumNr7bo9XcoZs2pCnr9fa3O9uQO/EkACo3xd7UxhqY3vtri+NNbLkY5IoKqIiLzj6ry4tnw7Oj18ONyoKDLHPDg0fDm6jCAQ9P78auTAnP47v33Qbh85ZbNuKqM0YqlIA6zPzqPwUCFMTY9wFGYN4ODGEwU6LZgTKB5oqG3rAJjAjWG0ZsK1YWxgRr+Y5yHK8DYQPCtKQwKz/dHZ3VhwH6VdpzSxfEKiL8ySyQGev272Zevex/qwmy0URv6C/AxsJEbDVIvAAAAAElFTkSuQmCC" />
            <input
                className="w-1/3 border-[1px] px-4 py-2 border-slate-400 border-opacity-25 rounded-md"
                placeholder="Pesquisa"
            />
            <div className="flex items-center gap-2">
                <img className="w-9 h-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAFLklEQVRYhe2X3W9URRiHnzm723aXlm4p2wJLibZJbUQQghj5EMFETBCDmAD+DxL5jBdGtBcYIwkQxRglxnhlsKCGO70xNUhbNFExRPkoLeWjYK222253u3vOzOvFbrsf3dNdql6Q8CaTc+bszPye93fmzOzA/bjHQt11j21tHu+C8BqUtUWE1SCNQE361yGQHgVnseS0c7O/g5Pb9f8DtKfDb2HtUiJ7gRAAIgUaZj+TARF12HjUMY6ujv9nQJ49ndsRdQQkPFW/CJQIiNwA2auPrTv1L4FEeXd3vSmoN1JtC4iXAoSAiCjkkFO77jValXFT9LiytIrlWfbDCeDl4uAlhUJYa8V6W2TTg1/S3l4oE7xuvb1DnW+JsranagX7Eqopp7kpyOxqP1obBofi9PQOMxxJ4N5P7fAOPNXtwOuFqQtEas7wuRusx1KsXzWfhxc3YBuD7RhsLdjakLSFKxdvcuHCIMaYiTmU5su8PpRs0+8//UVxoD0dfo+oS0CDG9CmDQ00NS/A1nkwTupqa8ONq3e4cH5gAiB9Jbt+S9tjzRx/PpY9tpUvZgm7p4NpWuArCmM7Qu3CEDXB/HzTYKnbsOX175yin1Pb1uZRwh43GIxm8eL5RWFsbUhqw9xwLRidYZm8psAU7GVbW86HlQPknbdwLRDKee+TyQkkY8ypC5YEYztCWXUl2HHcPgqEem9NzSp3hyy2TIHIhtM2KKskGFsbjOUBncxYMzm5M0R4TI5mDpDA6sKpZGJoKFoSjK2FWGSUzGTOUiGTqIjkaOZP6sZpaTw+rl25URKM7Rgi/XfAKnN3JwXbNA2QVE8L5PNz8XwfY9F4UZh4LM7ItdvgLXd1J1WV4HQOZToVKpZFwvg493UH8VjSFWY8nmDgx58wVjlYnrx1KNumrGXABSgyrUMAgRqGIppzp7/ldncvyaQzCZNMOgz39dF/5nuS4wr8wbyvNdudyTKcPXz+XnaVif8600VliHjsby53XcTiV8r85YgIyVgCUV4or4JAMNcJcXW+2xVIGc6Kkidc9/bsZP1B8AUw9hjjifH0swB4Z4HXx9StgjxnUvucQs5O45CcBtmXEc4mmxjUgD0O2mZOTQWhUD1l5T5EhFgsweDgCCORMbB86QltZfplgUwWpU+7Ajl3+js88+YNAHWgQGX/0QKcOD6SLFu2iJalD+Cv9OMYwdGCow12+n5kOErv7330XepHqzLw+PIW2cnyhxP+pSubYcrLsXa2v6qU9U7+c5JjhOv8bNy8An9lAEebgjCOFhxjcLQwGhnjtzPnGYmMgy8A5LokmP3m4y2Hc/TzdU1U3kPkek5GiSjNjUG2vrS2ZBhHC15/BS0bVlATqoTkaP4cumkiiQ+mGDLFiU83jKPMvsmVy44Trq9g4+aVGFTJMHa6ncFi0colBKrKUhttyh1B5BVObp9yEimwMII+tuGUEt7GaHyS4JnnHpsRzEQ7rRT1yxejdAKMRokc1J+88FUh7YJAAE6o/QB2/NTSRxsIVM2aMYxjBFsLVkWAqnAI7PGTzqKfW910ix6Dnm3r+a7xoUVPOjJzmIl65Nr1rr+cb9bQ2up6DCrpePP4u51Hmpa37PJWVFgzgUmMjZnI5ctHhw9t2l9Mq+TzVvO+z+YG6mrbwkseWe+rrFalwCSiozLa090ZG4xvjX744kApOnd9AFzR+lFgND7rQNns6h3+uXVhVV7hs6pqldZCfPhPSYxG7ejgwK3k8MiJcn39YP/x1ljxUe/HPRz/AMt8npQU1wgVAAAAAElFTkSuQmCC" />
                <button className="bg-sky-400 text-white px-4 py-[6px] rounded-md">
                    New note
                </button>
            </div>
        </div>
    );
};

export default Navbar;
